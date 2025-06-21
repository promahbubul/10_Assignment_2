import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import colors, { bgGreen } from 'colors';

async function main() {
  try {
    const dbResponse = await mongoose.connect(config.database_uri as string);

    console.log(
      `Database connection successfully. ${colors.green('host: ')} ${dbResponse.connection.host}`,
    );
    app.listen(config.port, () => {
      console.log(colors.bgYellow(`Server running on port ${config.port}`));
    });
  } catch (error) {
    console.log(error);
  }
}

main();
