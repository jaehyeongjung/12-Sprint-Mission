import useFilteredSearchParams from "@hooks/useFilteredSearchParams";
import useList from "@hooks/useList";
import { getProducts } from "@service/product";
import Filter from "@components/Filter";
import ProductList from "@components/Product/ProductList";
import Search from "@components/Search";
import Section from "@components/Section";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import LoadingSpinner from "@components/LoadingSpinner";

const rspnSize = {
  pc: 10,
  tablet: 6,
  mobile: 4,
};

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function AllItems() {
  const [params, setParams] = useFilteredSearchParams({
    keyword: "",
    orderBy: "recent",
    page: 1,
  });
  const { isLoading, totalCount, pageSize, items } = useList(
    getProducts,
    rspnSize,
    params
  );
  const { keyword, orderBy, page } = params;

  function handleParams(key, value) {
    setParams((prev) => ({ ...prev, [key]: value }));
  }

  function handlePage(page) {
    handleParams("page", page);
  }

  const pagination = { totalCount, page, pageSize, handlePage };

  return (
    <Section>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <Section.Header title="전체 상품">
        <Search
          keyword={keyword}
          onSubmit={() => handleParams("keyword", keyword)}
          placeholder="검색할 상품을 입력해주세요"
        />
        <Button to="/addItem" size="sm">
          상품 등록하기
        </Button>
        <Filter
          value={orderBy}
          onChange={() => handleParams("orderBy", orderBy)}
          options={sortOptions}
        />
      </Section.Header>
      <Section.Content>
        <ProductList items={items} keyword={keyword} isLoading={isLoading} />
        <Pagination {...pagination} />
      </Section.Content>
    </Section>
  );
}
