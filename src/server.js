import express from 'express';
import cors from 'cors';
import SibApiV3Sdk from 'sib_api_v3_sdk';

const app = express();
app.use(cors());
app.use(express.json());

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const contactsApi = new SibApiV3Sdk.ContactsApi();

app.post('/lead', async (req, res) => {
  const { name, email, whatsapp, perfil } = req.body;

  try {
    await contactsApi.createContact({
      email,
      attributes: {
        NOME: name,
        WHATSAPP: whatsapp,
        PERFIL: perfil,
      },
      listIds: [12], // 👈 ID DA LISTA
      updateEnabled: true,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar contato' });
  }
});

app.listen(3001, () =>
  console.log('Servidor rodando em http://localhost:3001')
);
