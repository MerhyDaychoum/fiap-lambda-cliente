export const handler = async (event, context) => {
    // Simulação do objeto mockado
    const mockResponse = {
      id: null,
      nome: 'Nome Completo',
      email: 'seuemail@gmail.com',
      cpf: '70234146060'
    };
  
    // Retornando a resposta da Lambda no formato esperado
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        data: mockResponse,
        message: "Sucesso",
      }),
    };
  };