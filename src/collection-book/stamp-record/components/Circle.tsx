import { CircleProps } from '../types/circle.props';

export default function Circle({ name, marginBottom, size }: CircleProps) {
  return (
    <div
      className={`${name}-dot`}
      style={{
        marginBottom,
        width: size,
        height: size,
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px',
      }}
    ></div>
  );
}
