interface ICardProps {
  title: string;
  backgroundColor: string;
  padding: '10px' | '20px' | '30px';
}

export const Card = ({ title, backgroundColor, padding }: ICardProps) => {
  return (
    <div style={{ backgroundColor, padding }}>{title} additional infoooooo</div>
  );
};
