const Notification = (props) => {
    const { iconUrl, name, className } = props;
    return (
      <div className={`notification ${className}`}>
        <img src={iconUrl} alt="icon" className="icon" />
        <span>{name}</span>
      </div>
    );
  };
  
  const element = (
    <div className="Main-container">
      <h1 className="Heading">Notifications</h1>
      <div className="Notification-container">
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="Information-Message"
          name="Information Message"
        />
      </div>
      <div className="Notification-container">
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="Success-Message"
          name="Success Message"
        />
      </div>
      <div className="Notification-container">
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="Warning-Message"
          name="Warning Message"
        />
      </div>
      <div className="Notification-container">
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="Error-Message"
          name="Error Message"
        />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  