import { useAuth } from "react-oidc-context";

function StatusIndicator() {
  const auth = useAuth();

  let color = "gray";
  console.log(auth)
  if (auth.isAuthenticated) {
    color = "green";
  } else if (!auth.isAuthenticated && !auth.isLoading) {
    color = "rgba(182, 146, 41, 0.87)";
  }

  const styles = {
    borderRadius: "4px",
    backgroundColor: color,
    position: "absolute",
    top: "5px",
    right: "5px",
    padding: "5px"
  };
  if (auth.isAuthenticated){
    return (<div style={styles}>Logged In</div>);
  } else if (auth.isLoading) {
    return (<div style={styles}>Loading</div>);
  } else {
    return (<div style={styles}>Logged Out</div>);
  }
  
}

export default StatusIndicator;
