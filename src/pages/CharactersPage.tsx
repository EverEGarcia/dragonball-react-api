import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import styles from './CharactersPage.module.css';

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
      setCharacters(data.items);
    };
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id) ? prevFavorites.filter(fav => fav !== id) : [...prevFavorites, id]
    );
  };

  return (
    <div className={styles.container}>
      <h1>Dragon Ball Characters</h1>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.characterList}>
        {filteredCharacters.map(character => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            isFavorite={favorites.includes(character.id)} 
            toggleFavorite={toggleFavorite} 
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
