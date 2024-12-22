import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignInwithGoogle() {
  const navigate = useNavigate();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
    
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
  
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName || "N/A",
          photo: user.photoURL || null, 
        });

        toast.success("User logged in successfully!", {
          position: "top-center",
        });

      
        navigate("/");
      } else {
        toast.error("No user data found!", {
          position: "top-center",
        });
      }
    } catch (error) {

      console.error("Google login error:", error);
      toast.error(error.message || "Login failed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-6 flex justify-center">
      <div
        className="flex items-center gap-3 border border-gray-300 rounded-md shadow-sm px-4 py-3 bg-white hover:shadow-lg hover:bg-gray-100 transition-all cursor-pointer"
        onClick={googleLogin}
      >
        <img
          src="https://static.cdnlogo.com/logos/g/38/google-icon.svg"
          alt="Google Sign-In"
          className="w-6 h-6"
        />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </div>
    </div>
  );
}

export default SignInwithGoogle;
