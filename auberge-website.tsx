import React from 'react';
import { useState } from 'react';

// Menu data
const menuItems = [
  {
    category: "Entrées",
    dishes: [
      { name: "Salade des Pyrénées", price: "12€", description: "Salade fraîche avec fromage local" },
      { name: "Terrine de Campagne", price: "10€", description: "Terrine maison aux herbes" }
    ]
  },
  {
    category: "Plats Principaux", 
    dishes: [
      { name: "Truite du Lac", price: "18€", description: "Truite fraîche du lac d'Estaing" },
      { name: "Cassoulet Pyrénéen", price: "16€", description: "Cassoulet traditionnel" }
    ]
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Gâteau Basque", price: "8€", description: "Dessert traditionnel" },
      { name: "Tarte aux Myrtilles", price: "7€", description: "Tarte aux fruits locaux" }
    ]
  }
];

// Image imports (placeholders)
const heroImage = "/api/placeholder/1200/600";
const aubergeInterior = "/api/placeholder/800/500";
const aubergeLakeView = "/api/placeholder/800/500";

const AubergeSite = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  return (
    <div className="font-sans max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="bg-green-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Auberge du Lac d'Estaing</h1>
          <div className="space-x-4">
            {['Accueil', 'Menu', 'Galerie', 'Contact'].map(section => (
              <button 
                key={section} 
                onClick={() => setActiveSection(section.toLowerCase())}
                className="hover:text-green-200"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      {activeSection === 'accueil' && (
        <section className="p-6">
          <img 
            src={heroImage} 
            alt="Vue de l'Auberge" 
            className="w-full h-[500px] object-cover"
          />
          <h2 className="text-3xl font-bold mt-6">Bienvenue à l'Auberge du Lac d'Estaing</h2>
          <p className="mt-4">
            Nichée au cœur des Hautes-Pyrénées, notre auberge vous invite à découvrir 
            la beauté du lac d'Estaing et la richesse de la cuisine pyrénéenne.
          </p>
        </section>
      )}

      {activeSection === 'menu' && (
        <section className="p-6">
          <h2 className="text-3xl font-bold mb-6">Notre Menu</h2>
          {menuItems.map(category => (
            <div key={category.category} className="mb-6">
              <h3 className="text-2xl font-semibold mb-3">{category.category}</h3>
              {category.dishes.map(dish => (
                <div key={dish.name} className="flex justify-between border-b py-2">
                  <div>
                    <h4 className="font-bold">{dish.name}</h4>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                  <span className="font-bold">{dish.price}</span>
                </div>
              ))}
            </div>
          ))}
        </section>
      )}

      {activeSection === 'galerie' && (
        <section className="p-6 grid md:grid-cols-2 gap-4">
          <img 
            src={aubergeInterior} 
            alt="Intérieur de l'Auberge" 
            className="w-full h-[400px] object-cover"
          />
          <img 
            src={aubergeLakeView} 
            alt="Vue sur le Lac" 
            className="w-full h-[400px] object-cover"
          />
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="p-6">
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p>Auberge du Lac d'Estaing</p>
              <p>65170 Estaing, Hautes-Pyrénées</p>
              <p>Téléphone : 05 XX XX XX XX</p>
              <p>Email : contact@auberge-lac-estaing.fr</p>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Votre nom" 
                className="w-full p-2 border"
              />
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full p-2 border"
              />
              <textarea 
                placeholder="Votre message" 
                className="w-full p-2 border h-32"
              ></textarea>
              <button className="bg-green-800 text-white px-4 py-2">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-green-900 text-white p-4 text-center">
        © 2024 Auberge du Lac d'Estaing - Tous droits réservés
      </footer>
    </div>
  );
};

export default AubergeSite;
