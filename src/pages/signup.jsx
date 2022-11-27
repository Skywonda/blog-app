import classes from "../styles/auth.module.css";
import google from "../assets/google.webp";
import facebook from "../assets/facebook1.png";
const SignUp = () => {
  return (
    <div className={classes.Auth}>
      <div className={classes.Main}>
        <div className={classes.Content}>
          <div className={classes.Left}>
            <div className={classes.Name}> Fenkei</div>
            <div className={classes.Greet}>Welcome back to Fenkei</div>
            <div className={classes.Text}>
              Stop wasting time with frustrating plaform. Build beautiful
              courses & content with ease. Get started in minutes with our
              unique and simple authoring tool.
            </div>
          </div>
          <div className={classes.Right}>
            <form className={classes.Form}>
              <div className={classes.FormHead}>
                <h3 className={classes.FormTitle}>Sign up</h3>
                <p className={[classes.Text, classes.Normal].join(" ")}>
                  Have an account ?{" "}
                  <a className={classes.Link} href="#">
                    Sign in
                  </a>
                </p>
              </div>
              <div className={classes.Inputs}>
                <input type="text" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
              </div>
              <p>
                <a className={classes.Link} href="#">
                  Forgot password ?
                </a>
              </p>

              <button className={classes.Button} type="submit">
                Sign up{" "}
              </button>
            </form>
            <p className={classes.Break}>or</p>
            <div className={classes.SpecialButtons}>
              <button className={classes.SpecialButton}>
                <img className={classes.Icon} src={google} alt="google" />
                <span>Google</span>
              </button>
              <button className={classes.SpecialButton}>
                <img className={classes.IconFB} src={facebook} alt="facebook" />
                <span>Facebook</span>
              </button>
            </div>
            <div className={classes.FormFooter}>
              Protected by recaptcha and subject to the Fenkei Privacy Policy
              and Terms of Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
