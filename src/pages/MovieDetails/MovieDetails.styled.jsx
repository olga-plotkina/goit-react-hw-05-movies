import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInformation = styled.div`
  margin-left: 15px;
  display: flex;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  img {
    width: 200px;
  }
`;

export const MovieCard = styled.div`
  padding: 5px 15px;
`;

export const AdditionalInfo = styled.div`
  margin: 10px 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  li {
    margin-bottom: 5px;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 2px;
  margin-left: 15px;
  margin-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 3px;
`;
