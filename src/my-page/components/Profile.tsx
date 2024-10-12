export default function Profile() {
  return (
    <div
      style={{
        width: '100%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <object
        type="image/svg+xml"
        data="/src/my-page/svg/profile.default.svg"
        style={{
          width: '70px',
          paddingRight: '18px',
        }}
      />
    </div>
  );
}
