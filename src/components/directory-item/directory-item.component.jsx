
import { useNavigate } from "react-router-dom";
import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const {imageUrl, title, route} = category

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      {/* <img src={category.imageUrl} alt={`${category.title} image here`} /> */}
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
