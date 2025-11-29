import React, { useState } from "react";
import createContrat from "/src/lib/api/createContrat.js";

export default function Contrat() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Stockage des données de toutes les étapes
  const [formValues, setFormValues] = useState({
    nom: "",
    prenom: "",
    date_naissance: "",
    lieu_naissance: "",
    adresse: "",
    telephone: "",
    email: "",
    nationalite: "",
    numero_securite_sociale: "",
    titre_sejour: "",
    casier_judiciaire: "false",
  });

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const result = await createContrat(formValues);
      console.log("Réponse backend :", result);
      alert("Formulaire envoyé avec succès !");
    } catch (error) {
      alert("Erreur lors de l'envoi du formulaire !");
    }
  };

  const inputClasses =
    "mt-1 p-2 rounded-md bg-transparent border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-accent transition w-full";

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-text-primary font-medium text-4xl">
            Création de contrat
          </h1>
          <p className="text-text-secondary mt-4">
            Créer un contrat formalise les engagements, sécurise les relations et clarifie les obligations de chaque partie.
          </p>
        </div>
      </div>

      <div className="bg-background-card w-full rounded-lg p-6 mt-8">
        {/* Stepper */}
        <div className="p-4 flex items-center">
          {[1, 2, 3].map((current) => (
            <React.Fragment key={current}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors
                  ${step >= current ? "bg-button-gradient" : "bg-gray-500"}`}
              >
                {current}
              </div>
              {current !== 3 && (
                <div
                  className={`flex-1 h-[2px] mx-2 rounded ${
                    step > current ? "bg-button-gradient" : "bg-gray-500"
                  } transition-all duration-500`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Formulaire */}
        <form className="mt-6 space-y-6" onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.type !== "textarea") e.preventDefault();
        }}>
          {/* Étape 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-text-secondary">Nom :</label>
                  <input type="text" name="nom" value={formValues.nom} onChange={handleChange} required className={inputClasses} />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-text-secondary">Prénom :</label>
                  <input type="text" name="prenom" value={formValues.prenom} onChange={handleChange} required className={inputClasses} />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-text-secondary">Date de naissance :</label>
                  <input type="date" name="date_naissance" value={formValues.date_naissance} onChange={handleChange} className={inputClasses} />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-text-secondary">Lieu de naissance :</label>
                  <input type="text" name="lieu_naissance" value={formValues.lieu_naissance} onChange={handleChange} className={inputClasses} />
                </div>
              </div>
            </div>
          )}

          {/* Étape 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-text-secondary">Adresse :</label>
                <textarea name="adresse" value={formValues.adresse} onChange={handleChange} rows={2} className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-text-secondary">Téléphone :</label>
                <input type="text" name="telephone" value={formValues.telephone} onChange={handleChange} className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-text-secondary">Email :</label>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} className={inputClasses} />
              </div>
            </div>
          )}

          {/* Étape 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-text-secondary">Nationalité :</label>
                <input type="text" name="nationalite" value={formValues.nationalite} onChange={handleChange} className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-text-secondary">Numéro de sécurité sociale :</label>
                <input type="text" name="numero_securite_sociale" value={formValues.numero_securite_sociale} onChange={handleChange} className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-text-secondary">Titre de séjour (si applicable) :</label>
                <input type="text" name="titre_sejour" value={formValues.titre_sejour} onChange={handleChange} className={inputClasses} />
              </div>
              <div className="flex flex-col">
                <label className="text-text-secondary">Casier judiciaire requis :</label>
                <select name="casier_judiciaire" value={formValues.casier_judiciaire} onChange={handleChange} className={inputClasses}>
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
              >
                Previous
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-button-gradient text-white hover:opacity-90 transition"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:opacity-90 transition"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
