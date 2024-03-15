import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paths } from '~/config/paths';
import { useMenuCategories } from '~/hooks/api/useMenuCategories';

export default function HomeMenu() {
  const { menuCategories } = useMenuCategories();
  return (
    <Menu>
      {menuCategories.map(({ categoryId, category }) => (
        <Link
          key={categoryId}
          to={paths.category(categoryId)}
        >
          <Item>{category}</Item>
        </Link>
      ))}
    </Menu>
  );
}

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;
const Item = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  text-align: center;
`;
