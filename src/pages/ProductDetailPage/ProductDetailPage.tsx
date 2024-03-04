import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductDetail } from '~/components/domain/ProductDetail';
import { totalDummy } from '~/shared/dummy.js';

export default function ProductDetailPage() {
  const { id } = useParams();
  /*FIXME - id로 개별 api 요청해서 정보 받아오기 */
  const product = totalDummy.find((item) => item.id === id)!;

  return (
    <>
      <ProductDetail productData={product} />
    </>
  );
}
