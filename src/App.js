import { 
  Pets 
} from './ui-components';
import './App.css';
import { 
  NavBar 
} from './ui-components';
import { 
  AddPet 
} from './ui-components';
import { useState } from 'react';
import { 
  PetDetails 
} from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [PetType, setPetType] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");


  const detailsOverride = {
    close: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowDetails(false);
      }
    }
  };
  const formOverride = {
    TextField36643015:{
      placeholder: name
    },
    TextField36643016:{
      placeholder: age
    },
    TextField36643017:{
      placeholder: PetType
    },
    TextField36672710:{
      placeholder: about
    },
    TextField36672717:{
      placeholder: color
    },
    TextField36672724:{
      placeholder: image
    },
    image: {
      src:
        updatePet == null 
        ? "https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg"
        : updatePet.image
    },

    Button36672733: {
      isDisabled: !updatePet ? true : false
    },
    Button36643019: {
      isDisabled: updatePet ? true : false
    },

    Icon: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowForm(false);
      }
    }
  };
  const navbarOverrides = {
    "Button": {
      style: {
        cursor: "pointer"
      },
      onClick: signOut
    },
    "image": {
      src: user?.attributes?.profile,
    },
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowForm(!showForm);
        setPet();
        setUpdatePet();
        setUpdatePet();
        setName();
        setAbout();
        setAge();
        setColor();
        setImage();
        setPetType();
      }
    } 
  };
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides}/>
      <header className="App-header"
      style={{backgroundColor: 'whitesmoke'}}>
      {showDetails && <PetDetails 
        overrides={detailsOverride}
        pet={pet}
        style={{
          textAlign: "left",
          margin: "1rem",
          backgroundColor: ''
        }}
        />}
      {showForm && (
        <AddPet
        pet={updatePet}
        overrides={formOverride} 
        style={{
          textAlign: "left",
          margin: "1rem"    
        }}/>
      )}
      
      <Pets 
        overrideItems={({item,index}) => ({
          overrides: {
            Button36532689: {
              onClick: () => {
              setShowDetails(true);
              setPet(item)
              }
            },
            Button36532699: {
              onClick: () => {
                if (!showForm) setShowForm(true);
                setUpdatePet(item);
                setName(item.name);
                setAbout(item.about);
                setAge(item.age);
                setColor(item.color);
                setImage(item.image);
                setPetType(item.PetType);
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            },
          },
        },
      })}
        itemsPerPage={3}
        width={"100%"}/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

