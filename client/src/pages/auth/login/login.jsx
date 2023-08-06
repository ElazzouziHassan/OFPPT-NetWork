import "./login.scss";

const Login = () => {
    
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <img src="src/assets/ofppt.png" alt="ofppt" />
                    <h3>Welcome to OFPPT NetWork</h3>
                    <div className="new-users">
                        <span>try to login with your school account</span><br />
                    </div>
                </div>
                <div className="right">
                    <h3>login</h3>
                    <form>
                        <input
                            type="text"
                            name="username"
                            placeholder='Username'
                        />
                        <span></span>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                        />
                        <span></span>
                        <button >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login