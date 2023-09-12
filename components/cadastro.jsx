export default function CadastroNext(){
    return(
        <>
            <div id="cadastro">
                <div className="cadastroHeader">
                   <a href="/"><img src="technology portocycle header.png" alt="logo" /></a>
                </div>

                <div className="cadastroCard">
                    <form action="">
                        <h2>CADASTRO</h2>

                        <div className="username">
                            <p>Username</p>
                            <input type="text" />
                        </div>

                        <div className="username">
                            <p>Email</p>
                            <input type="email" />
                        </div>

                        <div className="password">
                            <p>Password</p>
                            <input type="password"/>
                        </div>

                        <div className="password">
                            <p>Confirm password</p>
                            <input type="password"/>
                        </div>

                        <button>CRIAR CONTA</button>
                    </form>

                    <div className="imgCard">
                        <img src="cadastro img.png" alt="imagen" />
                    </div>
                </div>
            </div>
        </>
    )
}