import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import Doe1Preview from "./cms-preview-templates/doe1";
import Doe2Preview from "./cms-preview-templates/doe2";
import ObrigadoPreview from "./cms-preview-templates/obrigado";
import ProjetosPreview from "./cms-preview-templates/projetos";
import PostPreview from "./cms-preview-templates/post";
import ProjetoPreview from "./cms-preview-templates/projeto";
import SobreNosPreview from "./cms-preview-templates/sobre-nos";
import DoadoresPreview from "./cms-preview-templates/doadores";


CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("Home", HomePreview);
CMS.registerPreviewTemplate("Doe1", Doe1Preview);
CMS.registerPreviewTemplate("Doe2", Doe2Preview);
CMS.registerPreviewTemplate("Obrigado", ObrigadoPreview);
CMS.registerPreviewTemplate("Projetos", ProjetosPreview);
CMS.registerPreviewTemplate("Post", PostPreview);
CMS.registerPreviewTemplate("Projeto", ProjetoPreview);
CMS.registerPreviewTemplate("Sobre-nos", SobreNosPreview);
CMS.registerPreviewTemplate("Doadores", DoadoresPreview);
