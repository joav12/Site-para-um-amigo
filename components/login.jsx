export default function LoginNext(){
    return(
        <>
            <div id="login">
                <div className="loginHeader">
                   <a href="/"><img src="technology portocycle header.png" alt="logo" /></a>
                </div>

                <div className="loginCard">
                    <div className="imgCard">
                        <img src="login img.png" alt="imagen" />
                    </div>

                    <form action="">
                        <h2>LOGIN</h2>

                        <div className="username">
                            <p>Username</p>
                            <input type="text" />
                        </div>

                        <div className="password">
                            <p>Password</p>
                            <input type="password"/>
                        </div>

                        <button>ENTRAR</button>

                        <div className="cadastre">
                            <p>Não possui conta?</p>

                            <a href="cadastro">Cadastre-se</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}