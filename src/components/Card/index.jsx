import styles from './styles.module.css'

function Album({livros}){
    return(
        <>
            <div>
                <div className={styles.body}>
                    <div className={styles.divMae}>
                        <img src={livros.livro} alt={livros.titulo} className={styles.imag}/>
                        <div>
                            <h2 className={styles.titulo}>{livros.titulo}</h2>
                            <p className={styles.autor}>{livros.autor}</p>
                            <p className={styles.descricao}>{livros.descricao}</p>
                            <button className={styles.botao}>{livros.texto}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Album