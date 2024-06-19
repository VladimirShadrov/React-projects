import _ from 'lodash';

type PaginationProps = {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
};

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }: PaginationProps) => {

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {
          pages.map((page: number) => <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>)
        }

      </ul>
    </nav >
  );
};

export default Pagination;

