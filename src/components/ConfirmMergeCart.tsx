"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { useScreenSize } from "react-screen-size-helper";

const ConfirmMergeCart = () => {
  const { user, cart, cartSidebar } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("mergeCart");

  const accept = () => {
    user.setIsMergingOrRemovingLoading = true;
    user.mergeLocalCartWithUserCart(cart.userCartItems).then((check) => {
      if (check) {
        user.setIsMergingOrRemovingLoading = false;
      }
    });
  };

  const refuse = () => {
    user.setIsMergingOrRemovingLoading = true;
    user.clearLocalCart().then((check) => {
      if (check) {
        user.setIsMergingOrRemovingLoading = false;
      }
    });
  };

  return (
    <div className="px-5 flex flex-col gap-2 pt-2 justify-self-end w-full">
      <h1 className="text-sm md:text-xl text-center smob:ltr:text-left smob:rtl:text-right capitalize">
        {t("merge")}
      </h1>
      <div className="grid grid-cols-1 smob:grid-cols-2 gap-2">
        <Button
          size={currentWidth > 768 ? "md" : "sm"}
          radius="none"
          className="bg-mainBlack text-mainWhite capitalize"
          onClick={accept}
        >
          {t("yes")}
        </Button>
        <Button
          size={currentWidth > 768 ? "md" : "sm"}
          radius="none"
          className="text-mainBlack bg-mainBlack/20 capitalize"
          onClick={refuse}
        >
          {t("no")}
        </Button>
      </div>
    </div>
  );
};

export default observer(ConfirmMergeCart);
