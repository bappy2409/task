import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./GoogleSignUp.css";

const GoogleSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In Sucessfully</p>
      </div>
    );
  }
  return (
    <div>
      <Button
        className="btn btn-deafult w-100"
        onClick={() => signInWithGoogle()}
        type="submit"
      >
        Continue with Google
      </Button>
    </div>
  );
};
export default GoogleSignUp;
