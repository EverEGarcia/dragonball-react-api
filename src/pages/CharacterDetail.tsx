import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CharacterDetail.module.css';

interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: {
    name: string;
    description: string;
    image: string;
  };
  transformations: Array<{ name: string }>;
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      const data = await response.json();
      setCharacter(data);
      setLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!character) return <div>Character not found!</div>;

  return (
    <div className={styles.container}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Description:</strong> {character.description}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
      <p><strong>Origin Planet:</strong> {character.originPlanet.name}</p>
      <img src={character.originPlanet.image} alt={character.originPlanet.name} />
      <p>{character.originPlanet.description}</p>
      <h2>Transformations</h2>
      <ul>
        {character.transformations.length > 0 ? (
          character.transformations.map((transformation, index) => (
            <li key={index}>{transformation.name}</li>
          ))
        ) : (
          <li>No transformations</li>
        )}
      </ul>
    </div>
  );
};

export default CharacterDetail;
