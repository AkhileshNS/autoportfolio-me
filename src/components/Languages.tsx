import React from 'react';
import Container from './Languages.styles';
import { colors } from 'global/constants';

interface IStat {
  name: string;
  percentage: number;
}

export type IStats = IStat[];

interface IProps {
  stats: IStat[];
  card?: boolean;
}

const Languages: React.FC<IProps> = (props) => {
  const [index, setIndex] = React.useState(props.stats.length > 0 ? 0 : -1);

  const stats = props.stats.map(({ name, percentage }) => ({
    name,
    percentage,
    color: name in colors ? colors[name] : 'black',
  }));

  return (
    <Container card={props.card}>
      <div className='language-bar'>
        {stats.map(({ name, percentage, color }, i) => (
          <div
            style={{ flex: percentage * 10, backgroundColor: color }}
            key={name + i + '[bar]'}
            onMouseOver={() => setIndex(i)}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <div className='details'>
        {!props.card &&
          stats.map(({ name, percentage, color }, i) => (
            <div key={name + i + '[box]'} className='detail'>
              <div className='box' style={{ backgroundColor: color }} />
              <p>
                {name} <span>{percentage}%</span>
              </p>
            </div>
          ))}
        {props.card && index !== -1 && (
          <div className='detail'>
            <div
              className='box'
              style={{ backgroundColor: stats[index].color }}
            />
            <p>
              {stats[index].name} <span>{stats[index].percentage}%</span>
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Languages;
