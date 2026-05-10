import { 
  Authenticator, 
  View, 
  Card, 
  Heading, 
  Text, 
  Grid, 
  Button, 
  Flex, 
  Badge 
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify'; // 1. Add this import
import outputs from '../amplify_outputs.json'; // 2. Import your config file

// 3. Connect the frontend to the backend
Amplify.configure(outputs);


// Define a type for your portfolio items
interface ScriptProject {
  title: string;
  description: string;
  tags: string[];
}

const myScripts: ScriptProject[] = [
  {
    title: "Modular PowerShell Framework",
    description: "Automated SharePoint configuration using a provider-based architecture.",
    tags: ["Automation", "PowerShell"],
  },
  {
    title: "Fileless Memory Execution",
    description: "C# implementation for secure, low-level system tasks.",
    tags: ["Security", "C#"],
  }
];

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <View padding="2rem">
          <Flex justifyContent="space-between" alignItems="center" marginBottom="2rem">
            {/* Optional chaining for user? because user could technically be undefined */}
            <Heading level={2}>Admin Dashboard: {user?.username}</Heading>
            <Button onClick={signOut} variation="warning">Sign Out</Button>
          </Flex>

          <Grid
            templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
            gap="1rem"
          >
            {myScripts.map((script) => (
              <Card key={script.title} variation="elevated">
                <Flex direction="column" gap="0.5rem">
                  <Heading level={5}>{script.title}</Heading>
                  <Text>{script.description}</Text>
                  <Flex gap="0.5rem">
                    {script.tags.map(tag => (
                      <Badge key={tag} variation="info">{tag}</Badge>
                    ))}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
        </View>
      )}
    </Authenticator>
  );
}