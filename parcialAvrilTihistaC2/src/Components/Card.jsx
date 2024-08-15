import cardStyles from "../Styles/Card.module.css"

const Card = ({customer}) => {
  return (
    <div className={cardStyles.cardContainer}>
        <h3>Hola! Tu anime favorito es: {customer.anime}</h3>
        <h3>Hemos visto que tu personaje favorito es: {customer.character}</h3>
    </div>
  )
}

export default Card