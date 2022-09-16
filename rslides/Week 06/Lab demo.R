library(readr)

restaurants <- read_csv("https://adamkucz.github.io/psych548/data/restaurants.csv",
                        col_types = "ccccccccnncciclccicccc")




unique(
  grep(pattern = "vegetarian|vegan",
       x = restiename,
       ignore.case = T,
       value = T)
)

# Find all the vegetarian restaurants that scores above 50

restaurants[restaurants$`Inspection Score` > 50 & restiename %in% grep("veg[etarian|an]", restiename, ignore.case = T, value = T), ]





restaurants$`Inspection Date` <- as.Date(restaurants$`Inspection Date`, format = "%m/%d/%Y")

resties2018 <- restaurants[restaurants$`Inspection Date` > as.Date("2018-01-01"), ]
resties2018[grep("insects|hand|rodents", restaurants$`Violation Description`, ignore.case = T), c("Name", "Violation Description")]


restaurants[, grep("violation", colnames(restaurants), ignore.case = T)]





rame[restiename == "BBQ CHICKEN"] <- "BBQ PORK"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restaurants$Nestaurants$Name[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"
restiename[restiename == "BEACON GRILL"] <- "BEACON BBQ"


resties2018 <- restaurants[restaurants$`Inspection Date` > as.Date("2018-01-01"), ]
resties2018[grep("insects|hand|rodents", restaurants$`Violation Description`, ignore.case = T), c("Name", "Violation Description")]


restaurants[, grep("violation", colnames(restaurants), ignore.case = T)]





restiename[RestaurantName == "BEACON GRILL"] <- "Name BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"
restiename[RestaurantName == "BEACON GRILL"] <- "BEACON BBQ"

colnames(restaurants) <- stringr::str_to_lower(colnames(restaurants))


