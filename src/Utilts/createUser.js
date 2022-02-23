const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// const [user, loading, error] = useAuthState(auth, options);
 const [err, setErr] = useState({
    emailErr: "",
    passwordErr: "",
  });
let isValid = true;
 if (!email) {
      setErr({
        ...err,
        emailErr: "email Required",
      });
    } else {
      setErr({
        emailErr: null,
      });
      isValid = true;
    }

    if (!password) {
      setErr({
        ...err,
        passwordErr: "Password Required",
      });
    } else {
      setErr({
        passwordErr: null,
      });
      isValid = true;
    }
    if (isValid)
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  const userId = user.email;
  // console.log(user);
  console.log(userId);
  if(email=== null){
     alert('email required');
  }else{
   navigate("/")
  }
})
.catch((error) => {
  console.log(error);
});