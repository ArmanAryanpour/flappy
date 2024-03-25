type Props = {};

export default function Background({}: Props) {
  return (
    <div className="absolute w-full h-full z-1 pb-2 rounded-t-lg">
      <img
        src="bg.png"
        alt=""
        className="w-full h-full object-cover  rounded-t-lg"
      />
    </div>
  );
}
