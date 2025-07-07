const languages = [
  {
    id: "ru",
    title: "Русский",
  },
  {
    id: "de",
    title: "Deutsch",
  },
  {
    id: "en",
    title: "English",
  },
];

export function LanguageSwitch({ value }) {
  return (
    <div>
      <select value={value}>
        {languages.map((language) => (
          <option key={language.id} value={language.id}>
            {language.title}
          </option>
        ))}
      </select>
    </div>
  );
}
