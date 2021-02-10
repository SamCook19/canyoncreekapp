import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faMapMarkedAlt,
    faLock,
  } from "@fortawesome/free-solid-svg-icons";

  import {
    faEnvelope
  } from "@fortawesome/free-regular-svg-icons";

  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(
      faTrash,
      faSignOutAlt,
      faEdit,
      faSpinner,
      faPlusCircle,
      faPhone,
      faEnvelope,
      faMapMarkedAlt,
      faLock,
      
    );
  };
  
    export default Icons;