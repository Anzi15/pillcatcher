import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  items: { name: string; unit_amount: { value: string }; quantity: number }[];
  totalAmount: string;
  onSuccess: (payerEmail: string, payerName: string) => void;
}

export default function PayPalButton({ items, totalAmount, onSuccess }: PayPalButtonProps) {
  // Function to calculate item total
  const calculateItemTotal = (): string => {
    return items
      .reduce((total, item) => total + parseFloat(item.unit_amount.value) * item.quantity, 0)
      .toFixed(2); // Ensure it's two decimal places
  };

  const itemTotal = calculateItemTotal(); // Calculate the total of items

  return (
    <PayPalScriptProvider
      options={{ 'clientId': import.meta.env.VITE_PAYPAL_CLIENT_ID || '', disableFunding: 'card,credit,paylater' }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                reference_id: 'default', // Reference ID can be any unique string (optional)
                amount: {
                  currency_code: 'USD', // Ensure currency matches your item currency
                  value: totalAmount, // Total amount to be charged
                  breakdown: {
                    item_total: {
                      currency_code: 'USD', // Currency for item total
                      value: itemTotal, // Item total should match the calculated value
                    },
                  },
                },
                items: items.map((item) => ({
                  name: item.name,
                  unit_amount: { currency_code: 'USD', value: item.unit_amount.value },
                  quantity: item.quantity,
                })),
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const payerEmail = details.payer.email_address || '';
            const payerName = details.payer.name?.given_name || '';
            onSuccess(payerEmail, payerName);
          });
        }}
        onError={(err) => {
          console.error('PayPal Checkout onError', err);
        }}
      />
    </PayPalScriptProvider>
  );
}
