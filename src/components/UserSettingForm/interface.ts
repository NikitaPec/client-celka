export interface UserSettingFormInterfaceInputProps {
  visibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserEditStoreHook {
  title: string;
  value: string | null;
  errors: Array<string>;
}

export interface EditItemInputProps {
  title: string | null;
  setUserEditStor: React.Dispatch<React.SetStateAction<Array<UserEditStoreHook>>>;
  value: string | null;
  errors: Array<string>;
}

export interface EditPersonalDataInputProps {
  setUserEditStor: React.Dispatch<React.SetStateAction<Array<UserEditStoreHook>>>;
  userEditStor: Array<UserEditStoreHook>;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
