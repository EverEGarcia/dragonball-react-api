import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
  };
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.image} />
      <h2 className={styles.name}>{character.name}</h2>
      <button onClick={() => toggleFavorite(character.id)} className={styles.favoriteButton}>
        {isFavorite ? '❤️' : '♡'}
      </button>
      <Link to={`/characters/${character.id}`} className={styles.detailsButton}>
        Ver Detalles
      </Link>
    </div>
  );
};

export default CharacterCard;
