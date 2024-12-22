import {
  GithubAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignInWithGithub() {
  const navigate = useNavigate();

  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    provider.addScope("repo"); 

    try {
   
      const result = await signInWithPopup(auth, provider);


      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; 
      const user = result?.user;

      if (user) {
      
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: user.displayName || "N/A", 
          photo: user.photoURL || null, 
          accessToken: token || null, 
        });

        toast.success("User logged in successfully!", {
          position: "top-center",
        });

       
        navigate("/");
      } else {
        throw new Error("No user data found in the login response.");
      }
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData?.email;
        const pendingCredential = GithubAuthProvider.credentialFromError(error);

        if (email) {
          try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);

            if (signInMethods.includes("password")) {
              toast.error(
                "Account exists with email and password. Please log in with your email first.",
                { position: "top-center" }
              );
            } else if (signInMethods.length > 0) {
              toast.error(
                `Account exists with ${signInMethods[0]}. Please log in with that method first.`,
                { position: "top-center" }
              );
            } else {
              toast.error("Unable to resolve account conflict.", {
                position: "top-center",
              });
            }

           
            if (pendingCredential) {
              const currentUser = auth.currentUser;
              if (currentUser) {
                await linkWithCredential(currentUser, pendingCredential);
                toast.success("Accounts linked successfully!", {
                  position: "top-center",
                });
              }
            }
          } catch (linkError) {
            console.error("Error resolving account conflict:", linkError);
            toast.error(linkError.message || "Account linking failed", {
              position: "top-center",
            });
          }
        }
      } else {
        console.error("GitHub login error:", error);
        toast.error(error.message || "Login failed", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="mt-6 flex justify-center">
      <div
        className="flex items-center gap-3 border border-gray-300 rounded-md shadow-sm px-4 py-3 bg-white hover:shadow-lg hover:bg-gray-100 transition-all cursor-pointer"
        onClick={githubLogin}
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Sign-In"
          className="w-6 h-6"
        />
        <span className="text-gray-700 font-medium">Continue with GitHub</span>
      </div>
    </div>
  );
}

export default SignInWithGithub;
