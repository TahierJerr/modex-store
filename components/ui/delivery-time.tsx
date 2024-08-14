import { CheckIcon } from 'lucide-react';

interface DeliveryTimeProps {
  deliveryTime: string;
  classNames?: string;
}

const DeliveryTime: React.FC<DeliveryTimeProps> = ({ deliveryTime, classNames }) => {
  let number = '';
  if (deliveryTime) {
    number = deliveryTime.replace(/[^0-9]/g, '');
  }
  const deliveryTimeNumber = Number(number);
  let colorClass: string;
  let text: string;

  if (deliveryTimeNumber === 1) {
    colorClass = 'text-success';
    text = `Order before 17:00, tomorrow at home!`;
  } else if (deliveryTimeNumber > 1 && deliveryTimeNumber < 5) {
    colorClass = 'text-success';
    text = `Delivered in ${deliveryTimeNumber} working days!`;
  } else if (deliveryTimeNumber >= 5 && deliveryTimeNumber < 7) {
    colorClass = 'text-warning';
    text = `Delivered in ${deliveryTimeNumber} working days!`;
  } else if (deliveryTimeNumber >= 7) {
    colorClass = 'text-danger';
    text = `Delivered between 7 to 14 working days.`;
  } else {
    colorClass = 'text-danger';
    text = 'Unknown delivery date';
  }

  return (
    <div className={`flex items-center ${classNames} `}>
      <CheckIcon className=" items-center flex mr-1.5 bg-transparent text-success font-extrabold rounded-full p-0.5 -ml-0.5" size={22} />
      <p className={`${colorClass} overflow-hidden font-semibold`}>{text}</p>
    </div>
  );
};

export default DeliveryTime;
