import { n as newStyled, j as jsxRuntimeExports, r as reactExports, P as ProductsWithCartContext, a as reactDomExports, b as ProductCardSkeleton } from "./index-s3O8yEu_.js";
const ProductListWrapper = newStyled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  padding: 36px 24px 0 24px;
  margin-top: 80px;
`;
const ProductListHeader = newStyled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductListHeaderTitle = newStyled.h1`
  font-size: 24px;
  font-weight: 700;
`;
const ProductListFilterContainer = newStyled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const ProductList = newStyled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  flex: 1;
  width: 100%;
  margin-top: 28px;
  padding-bottom: 20px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
function CustomSelect({ id, items, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StyledCustomSelect, { onChange, "data-testid": id, children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.value, children: item.label }, item.value)) });
}
const StyledCustomSelect = newStyled.select`
  width: 125px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;

  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
const CustomButton$1 = newStyled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;

  background-color: #000;
  color: #fff;
  border: 1px solid #000;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
const ButtonIcon = newStyled.img`
  width: 15px;
  height: 15px;
`;
const ButtonTitle = newStyled.span``;
function CustomButton({ css: cssProp, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CustomButton$1, { css: cssProp, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonIcon, { src: "./addCartIcon.svg", alt: "button icon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonTitle, { children: "담기" })
  ] });
}
const ProductCardContainer = newStyled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
const ImageWrapper = newStyled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
const SoldOutOverlay = newStyled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: 1;
  pointer-events: none;
`;
const ImageSection = newStyled.img`
  width: 100%;
  height: 180px;
  display: block;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
const ContentSection = newStyled.div`
  flex: 1;
  padding: 15px 10px;
`;
const ProductName = newStyled.h2`
  font-size: 16px;
  font-weight: 700;
`;
const ProductCategory = newStyled.div`
  padding-top: 8px;
  font-size: 14px;
`;
const ProductPrice = newStyled.p`
  margin-top: 12px;
  font-size: 14px;
`;
const ProductQuantity = newStyled.p`
  margin-top: 12px;
  font-size: 14px;
`;
const ButtonSection = newStyled.div`
  height: 30px;
  display: flex;
  justify-content: end;
  padding: 10px;
`;
const CartQuantityContainer = newStyled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  gap: 12px;
`;
const CartQuantitySelectorButton = newStyled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
  :hover {
    background-color: #f0f0f0;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
const CartQuantityNumber = newStyled.div`
  font-size: 12px;
  font-weight: 500;
`;
const useProductsWithCartContext = () => {
  const context = reactExports.useContext(ProductsWithCartContext);
  if (!context) {
    throw new Error("useProductsWithCartContext must be used within a ProductsWithCartProvider");
  }
  return context;
};
function CartQuantitySelector({
  productId,
  cartProductId,
  cartProductQuantity,
  setError,
  isProductSoldOut
}) {
  const { updateCart } = useProductsWithCartContext();
  reactExports.useEffect(() => {
    const initializeCart = async () => {
      try {
        if (cartProductId === -1) {
          const newCart = {
            productId,
            cartProductId,
            cartProductQuantity: 1
          };
          await updateCart(newCart);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error initializing cart product:", error);
          setError("장바구니 초기화 중 오류가 발생했습니다.");
        }
      }
    };
    initializeCart();
  }, []);
  const handleMinusClick = async () => {
    try {
      const nextQuantity = cartProductQuantity > 1 ? cartProductQuantity - 1 : 1;
      const newCart = {
        productId,
        cartProductId,
        cartProductQuantity: nextQuantity
      };
      await updateCart(newCart);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating cart product:", error);
        setError("장바구니 수량 업데이트 중 오류가 발생했습니다.");
      }
    }
  };
  const handlePlusClick = async () => {
    try {
      const newCart = {
        productId,
        cartProductId,
        cartProductQuantity: cartProductQuantity + 1
      };
      await updateCart(newCart);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating cart product:", error);
        setError("장바구니 수량 업데이트 중 오류가 발생했습니다.");
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CartQuantityContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartQuantitySelectorButton, { onClick: handleMinusClick, children: "-" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartQuantityNumber, { children: cartProductQuantity }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartQuantitySelectorButton, { onClick: handlePlusClick, disabled: isProductSoldOut, children: "+" })
  ] });
}
function ProductCard({ product, setError }) {
  const { toggleCartSelection, selectedProductIds } = useProductsWithCartContext();
  const isCartSelected = selectedProductIds.includes(product.id);
  const handleProductCart = () => {
    toggleCartSelection(product.id);
  };
  const cartProductId = product.cartProductId ?? -1;
  const cartProductQuantity = product.cartProductQuantity || 1;
  const isProductSoldOut = product.cartProductQuantity !== void 0 && product.cartProductQuantity >= product.quantity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ProductCardContainer, { "data-testid": "product-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ImageWrapper, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ImageSection,
        {
          src: product.imageUrl,
          alt: product.name,
          onError: (e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "./default-product.jpg";
          }
        }
      ),
      isProductSoldOut && /* @__PURE__ */ jsxRuntimeExports.jsx(SoldOutOverlay, { children: "품절" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductName, { children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCategory, { children: product.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductPrice, { children: product.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ProductQuantity, { children: [
        "재고: ",
        product.quantity
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonSection, { children: !isCartSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomButton, { onClick: handleProductCart, disabled: isProductSoldOut }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      CartQuantitySelector,
      {
        productId: product.id,
        cartProductId,
        cartProductQuantity,
        setError,
        isProductSoldOut
      }
    ) })
  ] });
}
const filterByValue = ({ array, compare, value }) => {
  return array.filter((a) => a[compare] === value);
};
const MATCH_CATEGORY = {
  all: "전체",
  food: "식료품",
  clothes: "패션잡화"
};
function ErrorToast({ errorMessage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorToastWrapper, { children: errorMessage });
}
const ErrorToastWrapper = newStyled.div`
  width: 100%;
  height: 45px;
  background-color: #ffc9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  animation: fadeAnimation 0.5s ease-out;

  @keyframes fadeAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const NavbarWrapper = newStyled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
const NavbarContainer = newStyled.nav`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
`;
const Logo = newStyled.div`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;
const CartIconButtonContainer = newStyled.button`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 100%;
  cursor: pointer;
  padding: 2px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #5e5e5e;
  }
`;
const CartQuantity = newStyled.div`
  width: 19px;
  height: 19px;
  font-size: 13px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 100%;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 14px;
  left: 15px;
`;
const CartIcon = newStyled.img``;
const ModalContentContainer = newStyled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const ModalContentHeader = newStyled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;
const ModalContentBody = newStyled.div`
  width: 350px;
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #333333;
  padding: 16px;
`;
const ModalTotalPriceContainer = newStyled.div`
  width: 100%;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModalTotalPriceLabel = newStyled.span`
  font-size: 16px;
  font-weight: 700;
`;
const ModalTotalPrice = newStyled.div`
  font-size: 24px;
  font-weight: 700;
`;
const ModalEmptyTitle = newStyled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;
const Overlay = newStyled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: ${({ position }) => position === "center" ? "center" : "flex-end"};
`;
const ModalContainer = newStyled.div`
  background-color: white;
  padding: 24px 16px;
  animation: slideUp 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  ${({ position }) => position === "bottom" ? `
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  ` : `
    width: 90%;
    max-width: 480px;
    border-radius: 16px;
  `}

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
newStyled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const ModalFooterContainer = newStyled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseButton = newStyled.button`
  width: 100%;
  padding: 15px 0;
  background-color: #333333;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  font-style: 700;
  cursor: pointer;
  :hover {
    background-color: #000;
  }

  transition: background-color 0.2s ease;
`;
function CustomModal({ isOpen, onClose, position = "center", children }) {
  reactExports.useEffect(() => {
    const handleESC = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleESC);
    return () => document.removeEventListener("keydown", handleESC);
  }, [onClose]);
  if (!isOpen)
    return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { position, onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContainer, { position, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooterContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { onClick: onClose, children: "닫기" }) })
    ] }) }),
    document.body
  );
}
const CartProductCardContainer = newStyled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const CartProductImage = newStyled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
const CartProductDetails = newStyled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const CartProductName = newStyled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;
const CartProductPrice = newStyled.span`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`;
const CartQuantitySelectorContainer = newStyled.div`
  display: flex;
  margin-right: auto;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;
const DeleteContainer = newStyled.div`
  display: flex;
  justify-content: flex-end;
`;
const DeleteButton = newStyled.button`
  width: 40px;
  height: 24px;
  border: 1px solid #333333;
  font-size: 14px;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
`;
function CartProductCard({ cartProduct, setError }) {
  var _a;
  const { products, removeFromCart } = useProductsWithCartContext();
  const productQuantity = ((_a = products.find((product) => product.id === cartProduct.product.id)) == null ? void 0 : _a.quantity) || 0;
  const isProductSoldOut = cartProduct.quantity >= productQuantity;
  const handleDelete = async () => {
    try {
      await removeFromCart(cartProduct.id, cartProduct.product.id);
    } catch (error) {
      console.error("장바구니 상품 삭제 중 오류 발생:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CartProductCardContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CartProductImage,
      {
        src: cartProduct.product.imageUrl,
        alt: cartProduct.product.name,
        onError: (e) => {
          const target = e.currentTarget;
          target.onerror = null;
          target.src = "./default-product.jpg";
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CartProductDetails, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartProductName, { children: cartProduct.product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CartProductPrice, { children: [
        cartProduct.product.price.toLocaleString(),
        "원"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartQuantitySelectorContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CartQuantitySelector,
        {
          productId: cartProduct.product.id,
          cartProductId: cartProduct.id,
          cartProductQuantity: cartProduct.quantity,
          setError,
          isProductSoldOut
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteButton, { onClick: handleDelete, children: "삭제" }) })
  ] });
}
function Navbar({ cartProducts, cartTypeQuantity, errorMessage, setError }) {
  const [visibleError, setVisibleError] = reactExports.useState(errorMessage);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [totalPrice, setTotalPrice] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const total = cartProducts.reduce((acc, cartProduct) => {
      const quantity = cartProduct.quantity ?? 0;
      return acc + cartProduct.product.price * quantity;
    }, 0);
    setTotalPrice(total);
  }, [cartProducts]);
  reactExports.useEffect(() => {
    if (errorMessage) {
      setVisibleError(errorMessage);
      const timer = setTimeout(() => {
        setVisibleError("");
      }, 2e3);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(NavbarWrapper, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(NavbarContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { children: "SHOP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CartIconButtonContainer, { onClick: () => setIsModalOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartQuantity, { children: cartTypeQuantity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartIcon, { src: "./cartIcon.svg", alt: "cart icon" })
        ] })
      ] }),
      visibleError && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorToast, { errorMessage: visibleError })
    ] }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), position: "bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContentContainer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContentHeader, { children: "장바구니" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContentBody, { children: cartProducts.length > 0 ? cartProducts.map((cartProduct) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartProductCard, { cartProduct, setError }, cartProduct.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx(ModalEmptyTitle, { children: "장바구니에 상품을 담아주세요." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalTotalPriceContainer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalTotalPriceLabel, { children: "총 결제 금액" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalTotalPrice, { children: [
          totalPrice.toLocaleString(),
          "원"
        ] })
      ] })
    ] }) })
  ] });
}
const CATEGORY_OPTIONS = [
  { label: "전체", value: "all" },
  { label: "식료품", value: "food" },
  { label: "패션잡화", value: "clothes" }
];
const SORT_OPTIONS = [
  { label: "필터", value: "" },
  { label: "높은 가격순", value: "price,desc" },
  { label: "낮은 가격순", value: "price,asc" }
];
function App() {
  const [category, setCategory] = reactExports.useState("all");
  const [cartTypeQuantity, setCartTypeQuantity] = reactExports.useState(0);
  const { products, cartProducts, fetchProducts, error, setError, isLoading, setSortValue } = useProductsWithCartContext();
  reactExports.useEffect(() => {
    if (error !== "") {
      setError(error);
    }
  }, [error]);
  reactExports.useEffect(() => {
    const getProducts = async () => {
      try {
        await fetchProducts();
      } catch (error2) {
        if (error2 instanceof Error) {
          console.error("Error fetching products:", error2);
          setError("데이터를 가져오는 중 오류가 발생했습니다.");
        }
      }
    };
    getProducts();
  }, [fetchProducts]);
  reactExports.useEffect(() => {
    setCartTypeQuantity(cartProducts.length);
  }, [cartProducts]);
  reactExports.useEffect(() => {
    if (error !== "") {
      setError(error);
    }
  }, [error]);
  const filteredProducts = category === "all" ? products : filterByValue({
    array: products,
    compare: "category",
    value: MATCH_CATEGORY[category]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Navbar,
      {
        cartProducts,
        cartTypeQuantity,
        errorMessage: error,
        setError
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ProductListWrapper, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ProductListHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListHeaderTitle, { children: "WoowaBros Product List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ProductListFilterContainer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomSelect,
            {
              "data-testid": "category-select",
              id: "category-select",
              items: CATEGORY_OPTIONS,
              onChange: (e) => setCategory(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomSelect,
            {
              "data-testid": "sort-select",
              id: "sort-select",
              items: SORT_OPTIONS,
              onChange: (e) => setSortValue(e.target.value)
            }
          )
        ] })
      ] }),
      isLoading && products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductList, { children: Array.from({ length: 20 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {}, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProductList, { "data-testid": "product-list", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, setError }, product.id)) })
    ] })
  ] });
}
export {
  App as default
};
