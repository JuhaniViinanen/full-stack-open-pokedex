# Exercise 11.1

- **Hypothetical scenario**, App is developed in C# using Visual Studio Code

- **Linting, Testing, Building**: Visual Studio Code does not support C# by default, but support can be enabled through the 'C# Dev Kit' extension, which can be installed from within VS Code itself. The C# Dev Kit provides a host of useful features for developers, including features for linting, testing, building. The C# Dev Kit requires that the .NET SDK is installed.

- **Linting**, The C# Dev Kit includes the 'C#' extension, which provides language support for C# with many features. Formatting and linting C# code is one of the features provided, with customising how .cs files are formatted from the editor settings. Further linting and formatting can be done with the EditorConfig extension for VS Code.

- **Testing**, The C# Dev Kit supports three different testing frameworks: xUnit, NUnit, MSTest. Enabling testing and adding a test framework to a project is fairly straightforward and can be done from either the editor or command line. The benefit with using these testing frameworks provided by the C# Dev Kit is that they integrate with the editor itself, generating handy shortcuts for running tests in the editor, as well as providing a Test Explorer which allows viewing all the test cases in the workspace. These frameworks only cover unit testing, so other testing frameworks will be necessary for other cases.

- **Building**, The C# Dev Kit enables building any solution or project from the Solution Explorer just by right-clicking and selecting build. The actual building is done using the 'dotnet build' command provided by the .NET SDK.

- **CI Alternatives**
  - AWS CodePipeline
  - Azure Pipelines
  - Circle CI
  - Google Cloud Build

- **Self-hosted vs cloud-based**, A cloud-based enviroment would be better in this case since the team working on the project is quite small and 'The application is in active development and will be released soon.', meaning that any time spent on setting up some self-hosted solution would be time away from other tasks. Cloud-based solutions in general are faster and easier to setup and configure, and if the project is small it will usually be cheaper than a self-hosted solution.