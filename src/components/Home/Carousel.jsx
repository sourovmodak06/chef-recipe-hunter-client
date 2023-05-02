import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1535924681871-7bde1c30fe1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Mango Sticky Rice",
      text: "Rinse the glutinous rice with water until the water runs clear. Soak the rice in water for at least 30 minutes or up to 4 hours. Drain the rice and place it in a pot with 1 1/2 cups of water. Bring the water to a boil, then reduce the heat to low and cover the pot. Cook for 15-20 minutes, until the rice is tender and the water is absorbed. While the rice is cooking, mix the coconut milk, sugar, and salt in a small saucepan. Heat the mixture over medium heat until the sugar is dissolved, stirring occasionally. Remove from heat and set aside. When the rice is done, transfer it to a bowl and pour the coconut milk mixture over the rice. Stir to coat the rice with the mixture and let it sit for 10-15 minutes to absorb the flavors. To serve, place a scoop of sticky rice on a plate or bowl and top with sliced mangoes. Drizzle some of the remaining coconut milk mixture over the mangoes and rice. Garnish with sesame seeds if desired."
    },
    {
      url: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Homemade noodles and ramen recipe",
      text: "In a large mixing bowl, whisk together the flour and salt until well combined. Make a well in the center of the flour mixture and add the warm water and vegetable oil. Use a wooden spoon or your hands to mix everything together until a dough forms. Knead the dough on a floured surface for 5-10 minutes, until it becomes smooth and elastic. Cover the dough with a damp cloth and let it rest for 20-30 minutes. Roll out the dough on a floured surface to about 1/8 inch thickness. Use a sharp knife or a pasta cutter to cut the noodles into thin strips. Bring a large pot of water to a boil and add the noodles. Cook for 2-3 minutes, until the noodles are tender but still slightly firm. Drain the noodles and rinse them with cold water to stop the cooking process. Just add them to your favorite broth along with toppings such as sliced chicken, boiled eggs, green onions, mushrooms, and seaweed. Enjoy!"
    },
    {
      url: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Som Tam",
      text: "In a large mortar and pestle, pound the garlic and chili peppers together until they are well mashed. Add the palm sugar and pound until it is dissolved. Add the fish sauce, lime juice, and tamarind juice (if using), and stir to combine. Add the shredded green papaya and pound lightly to bruise the papaya and help it absorb the flavors of the dressing. Add the roasted peanuts, tomatoes, green beans, dried shrimp, and dried crab (if using), and pound lightly to mix everything together. Taste and adjust the seasoning as needed, adding more sugar, fish sauce, lime juice, or chili peppers to your liking. Serve the Som Tam salad on a plate or bowl, garnished with additional peanuts and fresh herbs if desired."
    },

    {
      url: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Green Curry",
      text: "Heat the oil in a large saucepan or wok over medium-high heat. Add the green curry paste and stir-fry for 1-2 minutes until fragrant. Add the chicken or beef and stir-fry until browned and cooked through. Add the eggplant, red bell pepper, and onion, and stir-fry for 2-3 minutes until the vegetables are tender but still slightly crisp. Pour in the coconut milk and bring to a boil. Reduce the heat to low and let the curry simmer for 5-10 minutes. Stir in the fish sauce, palm sugar, and lime juice, and season with salt to taste. Add the Thai basil leaves and stir until wilted. Serve the Green Curry hot over steamed rice or noodles."
    },
    {
      url: "https://images.unsplash.com/photo-1628428798909-75a2d42a557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      title: "Tom Yum Soup",
      text: "In a large saucepan, bring the chicken or vegetable broth to a boil. Add the lemongrass, galangal or ginger, kaffir lime leaves, chili peppers, and garlic, and let simmer for 10-15 minutes to infuse the broth with the flavors of the herbs and spices. Add the fish sauce, lime juice, and sugar, and stir to dissolve. Add the mushrooms and tomatoes, and let simmer for 5-10 minutes until the vegetables are tender but still slightly crisp. If using shrimp or chicken, add them to the soup and cook for an additional 3-5 minutes until heated through. Taste and adjust the seasoning as needed, adding more fish sauce, lime juice, or sugar to your liking. Garnish with chopped cilantro or Thai basil leaves if desired. Serve the Tom Yum Soup hot with steamed rice or noodles"
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); 
    setTimer(intervalId);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto pb-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute left-0 top-0 h-[420px] flex flex-col justify-center px-10 w-1/2 text-justify">
          <h2 className="text-3xl font-bold text-white mb-2">{slides[currentIndex].title}</h2>
          <p className="text-white">{slides[currentIndex].text}</p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
