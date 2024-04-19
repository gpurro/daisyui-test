import { useState } from 'react';

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emeral',
  'corporate',
  'synthwave'
];

export const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('light');
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenTheme = e.target.value;
    setSelectedTheme(chosenTheme);
    document.documentElement.setAttribute('data-theme', chosenTheme);
  };

  return (
    <>
      <div className="form-control">
        {themes.map((theme) => (
          <label className="label cursor-pointer gap-4" key={theme}>
            <span className="label-text">{theme}</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio"
              value={theme}
              checked={theme === selectedTheme}
              onChange={handleThemeChange}
            />
          </label>
        ))}
      </div>
    </>
  );
};
