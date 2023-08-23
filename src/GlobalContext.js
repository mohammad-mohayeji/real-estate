import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [bedroomsCount, setBedroomsCount] = useState("Any");
  const [bathroomsCount, setBathroomsCount] = useState("Any");
  const [priceRange, setPriceRange] = useState("Any");
  const [propertyType, setPropertyType] = useState("Any");
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(false);

  // return all properties
  useEffect(() => {
    const allProperties = properties.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    // set Countries state
    setProperties(uniqueProperties);
  }, []);

  const updateHandler = () => {
    // set loading (true)
    setLoading(true);

    // create a function that check if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("Any");
    };

    // get first value of number and parse it to number
    const minPrice = parseInt(priceRange.split(" ")[0]);

    // get second value of number (which is the maximum) and parse it to number
    const maxPrice = parseInt(priceRange.split(" ")[2]);

    const newProperties = propertiesData.filter((property) => {
      // house price
      const housePrice = parseInt(property.price);

      // if all values are selected
      if (
        property.bedrooms == bedroomsCount &&
        property.bathrooms == bathroomsCount &&
        property.type === propertyType &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        // for(let i = 0 ; i < amenities.length ; i++) {
        //     return property.hasOwnProperty(amenities[i]);
        // }
        if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
      }

      // if all values are default
      if (isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(priceRange) && isDefault(propertyType) && !amenities.length) {
        return property;
      }

      // if bedroomsCount is not default
      if (!isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(priceRange) && isDefault(propertyType) && !amenities.length) {
        return property.bedrooms == bedroomsCount;
      }

      // if bathroomsCount is not default
      if (!isDefault(bathroomsCount) && isDefault(bedroomsCount) && isDefault(priceRange) && isDefault(propertyType) && !amenities.length) {
          return property.bathrooms == bathroomsCount;
      }

      // if priceRange is not default
      if (!isDefault(priceRange) && isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(propertyType) && !amenities.length) {
        if(property.price >= minPrice && property.price <= maxPrice) {
            return property;
        }
      }

      // if propertyType is not default
      if (!isDefault(propertyType) && isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(priceRange) && !amenities.length) {
        return property.type === propertyType;
      }


      // if amenities is not default
      if (amenities.length && isDefault(propertyType) && isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(priceRange)) {
        if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
      }

      // if bedroomsCount & bathroomsCount are not default
      if (!isDefault(bedroomsCount) && !isDefault(bathroomsCount) && isDefault(priceRange) && isDefault(propertyType) && !amenities.length) {
        if(property.bedrooms == bedroomsCount && property.bathrooms == bathroomsCount) {
             return property;
        }
      }

      // if bedroomsCount & priceRange are not default
      if (!isDefault(bedroomsCount) && !isDefault(priceRange) && isDefault(bathroomsCount) && isDefault(propertyType) && !amenities.length) {
        if(property.bedrooms == bedroomsCount && property.price >= minPrice && property.price <= maxPrice) {
             return property;
        }
      }

      // if bedroomsCount & propertyType are not default
      if (!isDefault(bedroomsCount) && !isDefault(propertyType) && isDefault(bathroomsCount) && isDefault(priceRange) && !amenities.length) {
        if(property.bedrooms == bedroomsCount && property.type === propertyType) {
             return property;
        }
      }

      // if bedroomsCount & amenities are not default
      if (!isDefault(bedroomsCount) && amenities.length && isDefault(bathroomsCount) && isDefault(priceRange) && isDefault(propertyType)) {
        if(property.bedrooms == bedroomsCount) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      // if bathroomsCount & priceRange are not default
      if (!isDefault(bathroomsCount) && !isDefault(priceRange) && isDefault(bedroomsCount)  && isDefault(propertyType) && !amenities.length) {
        if(property.bathrooms == bathroomsCount && property.price >= minPrice && property.price <= maxPrice) {
             return property;
        }
      }

      // if bathroomsCount & propertyType are not default
      if (!isDefault(bathroomsCount)  && !isDefault(propertyType) && isDefault(bedroomsCount) && isDefault(priceRange) && !amenities.length) {
        if(property.bathrooms == bathroomsCount && property.type === propertyType) {
             return property;
        }
      }

      // if bathroomsCount & amenities are not default
      if (!isDefault(bathroomsCount) && amenities.length && isDefault(propertyType) && isDefault(bedroomsCount) && isDefault(priceRange)) {
        if(property.bathrooms == bathroomsCount) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      // if priceRange & propertyType are not default
      if (!isDefault(priceRange) && !isDefault(propertyType) && isDefault(bedroomsCount) && isDefault(bathroomsCount) && !amenities.length) {
        if(property.price >= minPrice && property.price <= maxPrice && property.type === propertyType) {
             return property;
        }
      }

      // if priceRange & amenities are not default
      if (!isDefault(priceRange) && amenities.length && isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(propertyType)) {
        if(property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      //  if propertyType & amenities are not default
      if (!isDefault(propertyType) && amenities.length && isDefault(bedroomsCount) && isDefault(bathroomsCount) && isDefault(priceRange)) {
        if(property.type === propertyType) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

     //  if bedroomsCount, bathroomsCount & priceRange are not default
     if (!isDefault(bathroomsCount) && !isDefault(priceRange) && !isDefault(bedroomsCount)  && isDefault(propertyType) && !amenities.length) {
        if(property.bathrooms == bathroomsCount && property.bedrooms == bedroomsCount && property.price >= minPrice && property.price <= maxPrice) {
             return property;
        }
      }

      //  if bedroomsCount, bathroomsCount & propertyType are not default
      if (!isDefault(bathroomsCount) && isDefault(priceRange) && !isDefault(bedroomsCount)  && !isDefault(propertyType) && !amenities.length) {
        if(property.bathrooms == bathroomsCount && property.bedrooms == bedroomsCount && property.type === propertyType) {
             return property;
        }
      }

      //  if bedroomsCount, bathroomsCount & amenities are not default
      if (!isDefault(bathroomsCount) && isDefault(priceRange) && !isDefault(bedroomsCount)  && isDefault(propertyType) && amenities.length) {
        if(property.bathrooms == bathroomsCount && property.bedrooms == bedroomsCount) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      //  if bedroomsCount, priceRange & propertyType are not default
      if (!isDefault(bedroomsCount) && !isDefault(priceRange) && isDefault(bathroomsCount)  && !isDefault(propertyType) && !amenities.length) {
        if(property.bedrooms == bedroomsCount && property.type === propertyType && property.price >= minPrice && property.price <= maxPrice) {
             return property;
        }
      }

      //  if bedroomsCount, priceRange & amenities are not default
      if (!isDefault(bedroomsCount) && !isDefault(priceRange) && isDefault(bathroomsCount)  && isDefault(propertyType) && amenities.length) {
        if(property.bedrooms == bedroomsCount && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      //  if bedroomsCount, propertyType & amenities are not default
      if (!isDefault(bedroomsCount) && isDefault(priceRange) && isDefault(bathroomsCount)  && !isDefault(propertyType) && amenities.length) {
        if(property.bedrooms == bedroomsCount && property.type === propertyType) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      //  if bathroomsCount, priceRange & propertyType are not default
      if (isDefault(bedroomsCount) && !isDefault(priceRange) && !isDefault(bathroomsCount)  && !isDefault(propertyType) && !amenities.length) {
        if(property.bathrooms == bathroomsCount && property.type === propertyType && property.price >= minPrice && property.price <= maxPrice) {
            return property;
        }
      }

      //  if bathroomsCount, priceRange & amenities are not default
      if (isDefault(bedroomsCount) && !isDefault(priceRange) && !isDefault(bathroomsCount)  && isDefault(propertyType) && amenities.length) {
        if(property.bathrooms == bathroomsCount && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }

      //  if bathroomsCount, propertyType & amenities are not default
      if (isDefault(bedroomsCount) && isDefault(priceRange) && !isDefault(bathroomsCount)  && !isDefault(propertyType) && amenities.length) {
        if(property.bathrooms == bathroomsCount && property.type === propertyType) {
            if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
        }
      }

      //  if priceRange, propertyType & amenities are not default
      if (isDefault(bedroomsCount) && !isDefault(priceRange) && isDefault(bathroomsCount)  && !isDefault(propertyType) && amenities.length) {
        if(property.type == propertyType && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
        }
      }

      // if bedroomsCount, bathroomsCount, priceRange, propertyType are not default
      if (!isDefault(bedroomsCount) && !isDefault(bathroomsCount) && !isDefault(priceRange)  && !isDefault(propertyType) && !amenities.length) {
        if (property.bedrooms == bedroomsCount && property.bathrooms == bathroomsCount && property.type === propertyType && property.price >= minPrice && property.price <= maxPrice) {
            return property;
        }
      }

      // if bedroomsCount, bathroomsCount, priceRange, amenities are not default
      if (!isDefault(bedroomsCount) && !isDefault(bathroomsCount) && !isDefault(priceRange)  && isDefault(propertyType) && amenities.length) {
        if (property.bedrooms == bedroomsCount && property.bathrooms == bathroomsCount && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
        }
      }

      // if bedroomsCount, bathroomsCount, propertyType, amenities are not default
      if (!isDefault(bedroomsCount) && !isDefault(bathroomsCount) && isDefault(priceRange)  && !isDefault(propertyType) && amenities.length) {
        if (property.bedrooms == bedroomsCount && property.bathrooms == bathroomsCount && property.type === propertyType) {
            if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
        }
      }

      // if bedroomsCount, priceRange, propertyType, amenities are not default
      if (!isDefault(bedroomsCount) && isDefault(bathroomsCount) && !isDefault(priceRange)  && !isDefault(propertyType) && amenities.length) {
        if (property.bedrooms == bedroomsCount && property.type === propertyType && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
            return property.hasOwnProperty(amenities[0]);
        } else if(amenities.length == 2) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                return property;
            }
        } else if(amenities.length == 3) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                return property;
            }
        }else if(amenities.length == 4) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                return property;
            }
        }else if(amenities.length == 5) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                return property;
            }
        }else if(amenities.length == 6) {
            if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                return property;
            }
        }
        }
      }

      // if bathroomsCount, priceRange, propertyType, amenities are not default
      if (isDefault(bedroomsCount) && !isDefault(bathroomsCount) && !isDefault(priceRange)  && !isDefault(propertyType) && amenities.length) {
        if (property.bathrooms == bathroomsCount && property.type === propertyType && property.price >= minPrice && property.price <= maxPrice) {
            if(amenities.length == 1) {
                return property.hasOwnProperty(amenities[0]);
            } else if(amenities.length == 2) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1])) {
                    return property;
                }
            } else if(amenities.length == 3) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2])) {
                    return property;
                }
            }else if(amenities.length == 4) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])) {
                    return property;
                }
            }else if(amenities.length == 5) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3])&& property.hasOwnProperty(amenities[4])) {
                    return property;
                }
            }else if(amenities.length == 6) {
                if(property.hasOwnProperty(amenities[0]) && property.hasOwnProperty(amenities[1]) && property.hasOwnProperty(amenities[2]) && property.hasOwnProperty(amenities[3]) && property.hasOwnProperty(amenities[4]) && property.hasOwnProperty(amenities[5])) {
                    return property;
                }
            }
        }
      }
    });

    setTimeout(() => {
      return (
        newProperties.length < 1 ? setProperties([]) : setProperties(newProperties),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <GlobalContext.Provider
      value={{ updateHandler, properties, setProperties, propertiesData, setPropertiesData, bedroomsCount, setBedroomsCount, bathroomsCount, setBathroomsCount, priceRange, setPriceRange, propertyType, setPropertyType, amenities, setAmenities, loading}}>
      {children}
    </GlobalContext.Provider>
  );
}
