# Creating a new widget

To create a new widget called `<widgetName>`:

1. Create a new Vite environment named `<widgetName>` using:

   ```json
   {
     "vite": "^7.2.4"
   }
   ```

2. Copy the contents of:

   ```text
   packages/widget-build/shared-resources/vite_project
   ```

   into the root of the new Vite environment.

3. In the new Vite environment, remove any `.ts` and `.tsx` files that exist in the default Vite project but do not exist in the shared resources.

4. Replace every occurrence of `usp` with `<widgetName>`.

At this stage, the goal is not to generate widget-specific code. The goal is simply to create a widget that follows the platform conventions and reuses the shared resources.

5. Replace the `UspWidget` component with a React component that is relevant to the new widget.

6. Ensure the React component replacing UspWidget is added in a components folder 

7. Can you update the widget to ensure the zod contract aligns with the json file of the public folder and the widget echo the title from the contract

8. can you adjust the e2e test in the tests folder to validate the title h1 is visible