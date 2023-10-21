export default function Container({
    children,
    // only defining functionality that are currently in use
  }) {
    return (
      <div 
      style={{
        display: 'flex',
        flexDirection: "column",
        width: '98.9vw',
        height: 'auto',
        overflow: false ? 'visible' : 'hidden',
        objectFit: 'fill',
        position: 'relative',
        background: 'transparent',
      }}
      >{children}</div>
    );
  }
  