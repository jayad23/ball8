import React from "react";
import TemplateLayout from "./layout/TemplateLayout";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation()

  const handleSelection = (arg: string) => {
    i18n.changeLanguage(arg)
  }

  return (
    <TemplateLayout>
      <div>
        <h1>App</h1>
      </div>
    </TemplateLayout>
  )
}

export default App;