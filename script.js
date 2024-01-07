console.log("Welcome to Advanced JavaScript Project")

const getFileStream = async (url) => {
    // implementation
  };
  
  (async () => {
    const stream = await getFileStream("https://domain.name/path/file.ext");
    for await (const chunk of stream) {
      console.log({ chunk });
    }
  })();