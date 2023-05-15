export const aiPluginTemplate = (publicUrl: string) => ({
  schema_version: "v1",
  name_for_human: "Code Writer Plugin 005",
  name_for_model: "codeWriter",
  description_for_human: "Plugin for reading and writing code files.",
  description_for_model:
    "Plugin for reading and writing code files. Don't output the content of the files or other big things unless specifically asked. When changing an endpoint, change the related documentation in .well-known/ai-plugin.json and openapi.json",
  auth: {
    type: "none",
  },
  api: {
    type: "openapi",
    url: `${publicUrl}/openapi/openapi.yaml`,
    is_user_authenticated: false,
  },
  logo_url: `${publicUrl}/logo.png`,
  contact_email: "support@example.com",
  legal_info_url: "http://www.example.com/legal",
});
