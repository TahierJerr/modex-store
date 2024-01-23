
interface DeliveryTimeProps {
  deliveryTime: string;
}

const DeliveryTime: React.FC<DeliveryTimeProps> = ({ deliveryTime }) => {
  let number = '';
  if (deliveryTime) {
    number = deliveryTime.replace(/[^0-9]/g, '');
  }
  const deliveryTimeNumber = Number(number);
  let colorClass: string;
  let text: string;

  if (deliveryTimeNumber === 1) {
    colorClass = 'text-success';
    text = `Voor 17:00 besteld, morgen in huis!`;
  } else if (deliveryTimeNumber > 1 && deliveryTimeNumber < 5) {
    colorClass = 'text-success';
    text = `Binnen ${deliveryTimeNumber} werkdagen bezorgd!`;
  } else if (deliveryTimeNumber >= 5 && deliveryTimeNumber < 7) {
    colorClass = 'text-warning';
    text = `Binnen ${deliveryTimeNumber} werkdagen bezorgd!`;
  } else if (deliveryTimeNumber >= 7) {
    colorClass = 'text-danger';
    text = `Tussen 7-14 werkdagen bezorgd.`;
  } else {
    colorClass = 'text-danger';
    text = 'Onbekende leverdatum';
  }

  return (
    <div className="flex items-center">
  <p className={`${colorClass} overflow-hidden font-semibold text-sm sm:text-md -mb-2 sm:-mb-4`}>{text}</p>
  </div>
  );
};

export default DeliveryTime;